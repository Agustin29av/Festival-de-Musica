import {src, dest, watch, series} from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

export function js(done){
    
     src('src/js/app.js')
        .pipe(dest('build/js'))
    
    done()
}

export function css(done){
     src('src/scss/app.scss', {sourcemaps: true})
        .pipe( sass().on('error', sass.logError) )
        .pipe( dest('build/scss'), {sourcemaps: true})
    
    done()
}

export function dev(){
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', js)

}

export default series(js, css, dev) //existe otro parecido a series que se llama parallel, series ejecuta uno y finaliza y sigue con el otro, parallel hace todo junta y despues finaliza 