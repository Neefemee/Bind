var AddConstraint = React.createClass({displayName: "AddConstraint",
  addConstraints: function() {
    var sList = "";
    var selected = this.props.selectedElement;
    console.log(selected);    

    $('.add-constraint input[type=text]').each(function () {
        var element = $(this).attr('id');
        
        if (element === 'bind-width' && this.checked) {
          gssEditor.replaceRange("#"+selected+"[width] == "+$('#bind-width-value').val()+";\n", {line: Infinity});
        };

        if (element === 'bind-height' && this.checked) {
          gssEditor.replaceRange("#"+selected+"[height] == "+$('#bind-height-value').val()+";\n", {line: Infinity});
        };

        if (element === 'bind-top' && this.checked) {
          gssEditor.replaceRange("#"+selected+"[top] == "+$('#bind-top-value').val()+";\n", {line: Infinity});
        };

        if (element === 'bind-bottom' && this.checked) {
          gssEditor.replaceRange("#"+selected+"[bottom] == "+$('#bind-bottom-value').val()+";\n", {line: Infinity});
        };

        if (element === 'bind-left' && this.checked) {
          gssEditor.replaceRange("#"+selected+"[left] == "+$('#bind-left-value').val()+";\n", {line: Infinity});
        };

        if (element === 'bind-right' && this.checked) {
          gssEditor.replaceRange("#"+selected+"[right] == "+$('#bind-right-value').val()+";\n", {line: Infinity});
        };
    });
  },

  cancelPopover: function() {
    $('.add-constraint input[type=checkbox]').attr({
      'checked': false,
    });

    $('.add-constraint input[type=text]').val('');

    var ev = new CustomEvent('showAddConstraint'); 
    ev.initEvent('showAddConstraint');
    window.dispatchEvent(ev);
  },

  render: function() {
    var cx = React.addons.classSet;
    var classes = cx({
      'add-constraint': true,
      'is-active': this.props.visiblility,
    });

    var modalClasses = cx({
      'modal': true,
      'is-active': this.props.visiblility,
    });
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: classes}, 
          React.createElement("div", {className: "add-constraint__element"}, 
            React.createElement("label", null, 
              "Width"
            ), 
            React.createElement("input", {type: "text", id: "bind-width-value"})
          ), 

          React.createElement("div", {className: "add-constraint__element"}, 
            React.createElement("label", null, 
              "Height"
            ), 
            React.createElement("input", {type: "text", id: "bind-height-value"})
          ), 


          React.createElement("div", {className: "add-constraint__element"}, 
            React.createElement("label", null, 
              "Top"
            ), 
            React.createElement("input", {type: "text", id: "bind-top-value"})
          ), 

          React.createElement("div", {className: "add-constraint__element"}, 
            React.createElement("label", null, 
              "Bottom"
            ), 
            React.createElement("input", {type: "text", id: "bind-bottom-value"})
          ), 

          React.createElement("div", {className: "add-constraint__element"}, 
            React.createElement("label", null, 
              "Left"
            ), 
            React.createElement("input", {type: "text", id: "bind-left-value"})
          ), 

          React.createElement("div", {className: "add-constraint__element"}, 
            React.createElement("label", null, 
              "Right"
            ), 
            React.createElement("input", {type: "text", id: "bind-right-value"})
          ), 

          React.createElement("div", {className: "add-constraint__element"}, 
            React.createElement("button", {onClick: this.addConstraints}, "Add constraints")
          )
        ), 

        React.createElement("div", {className: modalClasses, onClick: this.cancelPopover})
      )
    );
  }
});

