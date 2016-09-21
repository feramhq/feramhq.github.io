# sourcePngs := $(wildcard _source/images/*.png)
sourcePngs := $(wildcard _source/images/*.png)

all: index.html \
	styles/screen.css \
	scripts/main.js \
	images/favicon.png \
	images/profile.svg

index.html: _source/index.html ./node_modules/html-minifier
	./node_modules/.bin/html-minifier \
		--collapse-whitespace \
		--remove-attribute-quotes $< \
		--output $@


styles/screen.css: ./_source/styles/* | styles
	./node_modules/.bin/stylus $^ \
		--compress \
		--out $@

scripts/main.js: ./_source/scripts/* | scripts
	./node_modules/.bin/uglifyjs $^ \
		--compress \
		--mangle \
		--output $@


images/%.svg: _source/images/%.svg ./node_modules/svgo | images
	./node_modules/.bin/svgo $< $@

images/%.png: _source/images/%.png | images
	cp $< $@

styles:
	-mkdir ./styles

scripts:
	-mkdir ./scripts

images:
	-mkdir ./images

.PHONY: clean, all, style-files, image-files
clean:
	-rm -r ./index.html ./styles ./scripts ./images
