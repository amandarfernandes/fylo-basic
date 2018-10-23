const gulp=require('gulp');


const uglify = require('gulp-uglify')
const concat = require('gulp-concat');
const minifyCss = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');


const livereload = require('gulp-livereload');
const plumber = require('gulp-plumber');


const SCRIPTS_PATH='public/scripts/**/*.js';
const CSS_PATH='public/css/**/*.css';

const DIST_PATH= 'public/dist';

gulp.task('styles',()=>{
    console.log('STYLES')
    return gulp.src(['public/css/reset.css',CSS_PATH])
                .pipe(plumber((err)=>{
                    console.log('styles error');
                    console.log(err);
                    this.emit('end');
                }))
                .pipe(autoprefixer())
                .pipe(concat('styles.css'))
                .pipe(minifyCss())
                .pipe(gulp.dest(DIST_PATH))
                .pipe(livereload());
});

gulp.task('scripts',()=>{
    console.log('SCRIPTS')

    return gulp.src(SCRIPTS_PATH)
                .pipe(uglify())
                .pipe(gulp.dest(DIST_PATH))
                .pipe(livereload());
});

gulp.task('images',()=>{
    console.log('IMAGES')
});

gulp.task('default',()=>{
    console.log('DEFAULT');
});

gulp.task('watch',()=>{
    console.log('WATCH');
    require('./server.js');
    livereload.listen();
    gulp.watch(SCRIPTS_PATH,['scripts']);
    gulp.watch(CSS_PATH,['styles']);
})