import React, {Component} from 'react';

class ContactCard extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        event.preventDefault();
        this.props.eventClick(this.props.contact);
    }
    render() {
        const {
            contact
        } = this.props;

        return (
            <div className="contact" data-id="id" onClick={this.handleClick}>
                <span className="avatar small">&#9787;</span>
                <span className="title">{contact.firstName}</span>
                <span className="title">{contact.lastName}</span>
            </div>
        )
    }
}

export default ContactCard;