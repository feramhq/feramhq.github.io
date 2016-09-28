# sourcePngs := $(wildcard _source/images/*.png)
sourcePngs := $(wildcard _source/images/*.png)

all: about/index.html \
	images/logo.svg \
	images/profile.svg \
	images/favicon.png \
	imprint/index.html \
	index.html \
	pricing/index.html \
	scripts/main.js \
	styles/screen.css


styles/screen.css: ./_source/styles/* | styles
	./node_modules/.bin/stylus $^ \
		--compress \
		--out $@

scripts/main.js: ./_source/scripts/* | scripts
	./node_modules/.bin/uglifyjs $^ \
		--compress \
		--mangle \
		--output $@

index.html: _source/index.pug _source/partials/*
	mkdir -p $(@D)
	./node_modules/.bin/pug --path $< < $< > $@

%/index.html: _source/%.pug _source/partials/*
	mkdir -p $(@D)
	./node_modules/.bin/pug --path $< < $< > $@


images/%.svg: _source/images/%.svg ./node_modules/svgo | images
	./node_modules/.bin/svgo $< $@

images/%.png: _source/images/%.png | images
	cp $< $@

# images/favicon.png: _source/images/favicon.png | images
# 	convert -background none $< $@


styles:
	-mkdir ./styles

scripts:
	-mkdir ./scripts

images:
	-mkdir ./images

.PHONY: clean, all, style-files, image-files
clean:
	-rm -r \
		./about \
		./images \
		./imprint \
		./index.html \
		./pricing \
		./scripts \
		./styles
