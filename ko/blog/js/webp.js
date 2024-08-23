//크롬 브라우저에서만 png > webp 적용

$(function () {

    var userAgent = window.navigator.userAgent;

    if ( userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Edge') < 0 ) {

        var full_img = $('.blog-contents .full-img');
        var caption_img = $('.blog-contents .caption-wrap img');
        
        full_img.map(function(index, value){

            var string = $(value).attr('src');
            var full_item = string.split('?')[0].split('.');

            full_item = full_item[full_item.length-1];

            if(full_item === "png"){
                $(value).attr('src', string.replace(full_item, 'webp'));
            }
            
        });

        caption_img.map(function(index, value){

            var string = $(value).attr('src');
            var caption_item = string.split('?')[0].split('.');

            caption_item = caption_item[caption_item.length-1];
            if(caption_item === "png"){
                $(value).attr('src', string.replace(caption_item, 'webp'));
            }

        });
    }
});