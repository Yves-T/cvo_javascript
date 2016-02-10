var gulp = require('gulp');
var ts = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

var paths = {
    javascriptOutput: 'js',
    typescriptDir: 'typescript/**/*.ts',
    ecmaSixDir: 'src/**/*.js',
    ecmaOutputDir: 'dist',
    typescriptDefinitiona: 'typings/**/*.ts'
};

gulp.task("scripts", function () {
    // Compile TypeScript code
    gulp.src([paths.typescriptDir,paths.typescriptDefinitiona])
        .pipe(ts({
            noImplicitAny: false,
            noEmitOnError: true,
            removeComments: true,
            sourceMap: true,
            //out: "appBundle.js",
            target: "es5"
        }))
        .pipe(gulp.dest(paths.javascriptOutput));
});

gulp.task('es2015', function () {
    return gulp.src(paths.ecmaSixDir)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        //.pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.ecmaOutputDir));
});

gulp.task("watch", ["scripts"], function () {
    gulp.watch(paths.typescriptDir, ["scripts"]);
    gulp.watch(paths.ecmaSixDir, ["es2015"]);
});

gulp.task('default', ['watch'], function () {

});