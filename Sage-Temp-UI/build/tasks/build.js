﻿var gulp = require("gulp");
var runSequence = require("run-sequence");
var changed = require("gulp-changed");
var plumber = require("gulp-plumber");
var sourceMaps = require("gulp-sourcemaps");
var paths = require("../paths");
var assign = Object.assign || require("object.assign");
var notify = require("gulp-notify");
var typescript=require("gulp-tsb");

gulp.task("copy-html", function() {
   gulp.src(["src/**/*.html"]).pipe(gulp.dest("wwwroot/dist"));
});

gulp.task("copy-node", function() {
   var node_mods = [
      "node_modules/es6-shim/es6-shim.min.js",
      "node_modules/systemjs/dist/system-polyfills.js",
      "node_modules/angular2/es6/dev/src/testing/shims_for_IE.js",
      "node_modules/angular2/bundles/angular2-polyfills.js",
      "node_modules/systemjs/dist/system.src.js",
      "node_modules/rxjs/bundles/Rx.min.js",
      "node_modules/angular2/bundles/angular2.dev.js",
      "node_modules/angular2/bundles/router.dev.js",
      "node_modules/angular2/bundles/http.dev.js",
      "node_modules/rxjs/bundles/Rx.js"
   ];
   gulp.src(node_mods).pipe(gulp.dest("wwwroot/libs"));
});

var typeScriptCompiler = typeScriptCompiler || null;
gulp.task("build-system", function() {
   if(!typeScriptCompiler){
      typeScriptCompiler=typescript.create(require("../../tsconfig.json").compilerOptions);
   }

   return gulp.src(paths.dtsSrc.concat(paths.source))
      .pipe(plumber())
      .pipe(sourceMaps.init({loadMaps: true}))
      .pipe(typeScriptCompiler())
      .pipe(sourceMaps.write({includeContent: false, sourceRoot: "/src"}))
      .pipe(gulp.dest(paths.output));
});

// copies changed html files to the output directory
gulp.task('build-html', function() {
   return gulp.src(paths.html)
      .pipe(changed(paths.output, {extension: '.html'}))
      .pipe(gulp.dest(paths.output));
});

// copies changed css files to the output directory
gulp.task('build-css', function() {
   return gulp.src(paths.css)
      .pipe(changed(paths.output, {extension: '.css'}))
      .pipe(gulp.dest(paths.output));
});

gulp.task("build", function(callback) {
   return runSequence(
      'clean',
      ["build-system", "build-html", "build-css"],
      callback
   );
});