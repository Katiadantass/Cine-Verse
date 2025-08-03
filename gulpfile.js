const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

// Compilar SCSS
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

// Otimizar imagens
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// Tarefa padrão
exports.default = gulp.parallel(styles, images);

// Watch (observar alterações)
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/images/**/*', gulp.parallel(images));
};