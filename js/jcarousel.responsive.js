(function($) {
    $(function() {
        var jcarousel = $('.jcarousel1');

        jcarousel
            .on('jcarousel1:reload jcarousel:create', function () {
                var width = jcarousel.innerWidth();

                if (width >= 600) {
                    width = width / 5;
                } else if (width >= 350) {
                    width = width / 3;
                }

                jcarousel.jcarousel('items').css('width', width + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel1-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel1-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel1-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });
})(jQuery);


(function($) {
    $(function() {

        function init_carousel(){
        var jcarousel = $('.jcarousel_m');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var width = jcarousel.innerWidth();

                if (width >= 600) {
                    width = width / 4;
                } else if (width >= 350) {
                    width = width / 3;
                }

                jcarousel.jcarousel('items').css('width', width + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel_m-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel_m-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel_m-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });

        }
        init_carousel();

        $('#myModal').on('shown.bs.modal', function (e) {
            console.log(e.relatedTarget);
            init_carousel();
        })


    });
})(jQuery);
