if (Meteor.isClient) {

  // watch the current values

  Meteor.setInterval(function () {
    Session.set('pageYOffset'    , window.pageYOffset);
    Session.set('bodyScrollTop'  , document.body.scrollTop);
    Session.set('bodyIsPushable' , $('body').hasClass('pushable'));
  }, 100);

  Template.registerHelper('session', function (key) {
    return Session.get(key);
  });

  // pusher

  Template.pusher.helpers({
    columns: function () {
      var columns = [], n = 20;
      while (columns.length < n) {
        columns.push({
          title   : Fake.sentence(),
          content : Fake.paragraph() + '<br/>' + Fake.paragraph(),
        });
      }
      return columns;
    },
  });

  // sidebar

  Template.sidebar.rendered = function () {
    // initializing sidebar here assing 'pushable' class to the body element
    this.$('.ui.sidebar').sidebar({});
  }

  Template.sidebar.events({
    'click [data-action=toggle]': function (e, t) {
      t.$('.ui.sidebar').sidebar('toggle');
    }
  });

  // stats

  Template.stats.rendered = function () {
    this.$('.ui.toggle').checkbox({
      onChange: function () {
        $('body').toggleClass('pushable');
      },
    });
  };

  Template.stats.helpers({
    checked: function () {
      return Session.get('bodyIsPushable') && 'checked';
    },
  });

}
