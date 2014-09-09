(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;
    }

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    }

  });

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: '...',
      canPurchase: true,
      images: [
        {
          full: "oelo.jpeg"
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this product!",
          author: "joe@thomas.com"
        },
        {
          stars: 1,
          body: "This product sucks!",
          author: "tim@hater.com"
        }
      ]
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: "...",
      canPurchase: true,
      images: [
        {
          full: "oelo2.jpg"
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this product!",
          author: "joe@thomas.com"
        },
        {
          stars: 1,
          body: "This product sucks!",
          author: "tim@hater.com"
        }
      ]
    }
  ]

})();

