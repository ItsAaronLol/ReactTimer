var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  render: function(){
    return(
      <div className = "text-center">
        <h1 className = "page-title">Timer</h1>
        <Clock/>
        <Controls/>
      </div>

    );
  }
});

module.exports = Timer;
