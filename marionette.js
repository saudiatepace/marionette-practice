$(document).ready(function(){ 
                           
var app = new Backbone.Marionette.Application();

app.addRegions({
    tabpane: '.tab-pane'
});

var tabpaneModel = Backbone.Model.extend({
    initialize: function () {
        console.log('model');
    }
});

var contentCollection = Backbone.Collection.extend({
    model : tabpaneModel,
    initialize: function () {
        console.log('collection');
    }
});

// var myTemplate = _.template("<img src="<%-src %>"/>
// <p>O<%- page%> </p><p><%- text%></p>
// <h3 class="toggle-drawer1"><%- page%><img src="PD360%20-%20Learning%20Targets_files/downarrow-blue.png"></h3>
// <br class="clear">")

var dataView = Backbone.Marionette.ItemView.extend({
    template : '#headerContent',
    tagName  : 'div',
    className : 'header',
    initialize: function () {
        console.log('dataView');
    }
});


var contentView = Backbone.Marionette.CollectionView.extend({
    tagName    : 'div',
    className  : 'container',
    itemView   :  dataView,
    initialize: function () {
        console.log('collectionView');
    },
    // appendHtml : function( parent, child ) {
    //     parent.$('.container').append(child.el);
    //     //console.log(child);
    //     //console.log(child)
    // }
    onRender: function () {
        // $('#all').html('fdsfdsfsd');
        // console.log( this.el )
        //console.log( $('#all').text() );
    }

});

app.addInitializer(function ( options ) {
    console.log('appInit');
    var collectionView = new contentView ({
        collection : options.x});

    collectionView.render();
    app.tabpane.show(collectionView);
}); 


var dummydata = new contentCollection([
        {src: 'file:///Users/saudiatepace/Desktop/marionette/PD360%20-%20Learning%20Targets_files/ron.png',
         date: 'Oct 18, 2013',
         text: '<span class="bold">Dimensions of learning and teaching</span> - assigned by <span class="blue">Ron Swanson</span>',
         page: '<strong>1 / 3</strong> Completed'
        },
        {src: 'file:///Users/saudiatepace/Desktop/marionette/PD360%20-%20Learning%20Targets_files/ron.png',
         date: 'Oct 18, 2013',
         text: '<span class="bold">Dimensions of learning and teaching</span> - assigned by <span class="blue">Ron Swanson</span>',
         page: '<strong>1 / 3</strong> Completed'
        } 

]);
console.log('test');

    app.start({x : dummydata});

});

