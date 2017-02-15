var React = require('react')

var Card = React.createClass({

  render: function() {
    var card
    return (
      <div>
        <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/" + (this.props.card) + ".png"} /></h1>
      </div>
    )
  }

})

module.exports = Card
