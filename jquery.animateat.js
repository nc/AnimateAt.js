/*global jQuery */
/*!
* AnimateAt.js 0.1.0
*
* Copyright (c) 2013 Namit Chadha http://namit.me
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
* 
* Date: Thu May 21 23:21:00 2013 0000
*/

(function ( $ ) {
 
    $.animateAt = function() {
      var toAnimate;

      // find elements to animate
      toAnimate = $("[data-animate-at]");

      toAnimate.find("[data-animate-from-hidden").hide();

      toAnimate.each(function() {
        var animateAt;
        el = $(this);
        animateAt = parseInt(el.attr("data-animate-at"));
        setTimeout((function() {
          return el.addClass("animated").show();
        }), animateAt);
      });

      return this;
    };
 
}( jQuery ));