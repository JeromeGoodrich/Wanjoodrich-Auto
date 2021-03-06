import React from 'react';
import {
  sprkIsValidPhone,
  sprkIsValidDate,
  sprkFormatDate,
  sprkFormatPhone,
  sprkIsValidMonetary,
  SprkInputContainer,
  SprkLabel,
  SprkInput,
  SprkIcon,
  SprkFieldError,
  SprkHelperText,
  SprkTextareaContainer,
  SprkTextarea,

} from '@sparkdesignsystem/spark-react/';
import ExampleContainer from '../../../containers/ExampleContainer/ExampleContainer';

class SprkTextInputDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      phone: '',
      monetary: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.cats = this.cats.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  cats = (value) => {
    return Number(value.replace(/,/g, ''))
    .toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    .replace(/\$/g, '');
  }

  render() {
    const { date, phone, monetary } = this.state;
    return (
      <>
        <ExampleContainer heading="Text">
          <SprkInputContainer>
            <SprkLabel>Name</SprkLabel>
            <SprkInput type="text" placeholder="Enter your first name" id="text1"/>
          </SprkInputContainer>
        </ExampleContainer>
        <ExampleContainer heading="Text with default value">
          <SprkInputContainer>
            <SprkLabel>Name</SprkLabel>
            <SprkInput type="text" defaultValue="default value"  id="text2"/>
          </SprkInputContainer>
        </ExampleContainer>
        <ExampleContainer heading="Text input disabled">
          <SprkInputContainer>
            <SprkLabel isDisabled>Name</SprkLabel>
            <SprkInput type="text" placeholder="Enter your first name" isDisabled  id="text3"/>
          </SprkInputContainer>
        </ExampleContainer>
        <ExampleContainer heading="Text input error">
          <SprkInputContainer>
            <SprkLabel>Name</SprkLabel>
            <SprkInput
              type="text"
              isValid={false}
              placeholder="Enter your first name"
              id="text4"
            />
            <SprkFieldError id="error1">
              <SprkIcon
                iconName="exclamation-filled"
                additionalClasses="sprk-b-ErrorIcon"
                aria-hidden="true"
              />
              <div className="sprk-b-ErrorText">There is an error on this field.</div>
            </SprkFieldError>
          </SprkInputContainer>
        </ExampleContainer>
        <ExampleContainer heading="Huge">
          <SprkInputContainer variant="huge">
            <SprkInput
              variant="huge"
              type="text"
              placeholder="Enter your first name"
              id="text5"
            />
            <SprkLabel>Name</SprkLabel>
          </SprkInputContainer>
        </ExampleContainer>
        <ExampleContainer heading="Huge Error">
          <SprkInputContainer variant="huge">
            <SprkInput
              variant="huge"
              placeholder="Enter your first name"
              isValid={false}
              type="text"
              id="text6"
            />
            <SprkLabel>Name</SprkLabel>
            <SprkFieldError id="error2">
              <SprkIcon
                iconName="exclamation-filled"
                additionalClasses="sprk-b-ErrorIcon"
                aria-hidden="true"
              />
              <div className="sprk-b-ErrorText">There is an error on this field.</div>
            </SprkFieldError>
          </SprkInputContainer>
        </ExampleContainer>
        <ExampleContainer heading="Huge Disabled">
          <SprkInputContainer variant="huge">
            <SprkInput
              variant="huge"
              placeholder="Enter your first name"
              isDisabled
              type="text"
              id="text7"
            />
            <SprkLabel>Text Input Label</SprkLabel>
          </SprkInputContainer>
        </ExampleContainer>
        <ExampleContainer heading="Huge with default value">
          <SprkInputContainer variant="huge">
            <SprkInput
              variant="huge"
              type="text"
              placeholder="Enter your first name"
              defaultValue="Default Value"
              id="text8"
            />
            <SprkLabel>Name</SprkLabel>
          </SprkInputContainer>
        </ExampleContainer>
        <ExampleContainer heading="Text Huge Hidden Label">
          <SprkInputContainer variant="huge">
            <SprkInput
              variant="huge"
              type="text"
              placeholder="Enter your first name"
              additionalClasses="sprk-b-TextInput--label-hidden"
              id="text9"
            />
            <SprkLabel>Name</SprkLabel>
          </SprkInputContainer>
        </ExampleContainer>
        <ExampleContainer heading="Text with Helper">
          <SprkInputContainer>
            <SprkLabel htmlFor="text-1">Text Input</SprkLabel>
            <SprkInput id="text-1" placeholder="Enter your first name" />
            <SprkHelperText id="helper-text-1">
              Optional helper text.
            </SprkHelperText>
          </SprkInputContainer>
        </ExampleContainer>
        <ExampleContainer heading="Textarea">
          <SprkTextareaContainer>
            <SprkLabel htmlFor="sprk-textarea">Message</SprkLabel>
            <SprkTextarea id="sprk-textarea" placeholder="Enter your message..." />
          </SprkTextareaContainer>
        </ExampleContainer>
        <ExampleContainer heading="Search">
           <SprkInputContainer>
            <SprkLabel htmlFor="search-1">Search</SprkLabel>
            <SprkInput id="search-1" placeholder="Search" />
           </SprkInputContainer>
        </ExampleContainer>
        <ExampleContainer heading="Inline Search">
          <SprkInputContainer>
            <div className="sprk-b-InputContainer__icon-container">
              <SprkLabel htmlFor="search-2" isHidden>
                Text Input Label
              </SprkLabel>
              <SprkIcon
                iconName="search"
                additionalClasses="sprk-b-InputContainer__icon"
                aria-hidden="true"
              />
              <SprkInput
                id="search-2"
                additionalClasses="sprk-b-TextInput--has-svg-icon"
                type="search"
                placeholder="Search"
              />
            </div>
          </SprkInputContainer>
        </ExampleContainer>
        <ExampleContainer heading="Monetary">
          <SprkInputContainer>
            <div
              className="
                sprk-b-InputContainer__icon-container
                sprk-b-TextInputIconContainer--has-text-icon"
            >
              <SprkLabel isMonetary htmlFor="monetary-1">
                Payment
              </SprkLabel>
              <SprkInput
                additionalClasses="sprk-b-TextInput--has-text-icon"
                id="monetary-1"
                name="monetary"
                placeholder="0.00"
                isValid={sprkIsValidMonetary(monetary)}
                value={monetary}
                onChange={this.handleChange}
              // formatter={sprkFormatMonetary}
                // formatter={this.cats}
              />
            </div>
            {!sprkIsValidMonetary(monetary) &&
              <SprkFieldError id="invalid-monetary">
                <SprkIcon
                  iconName="exclamation-filled"
                  additionalClasses="sprk-b-ErrorIcon"
                  aria-hidden="true"
                />
                <div className="sprk-b-ErrorText">There is an error on this field.</div>
              </SprkFieldError>
            }
          </SprkInputContainer>
        </ExampleContainer>
        <ExampleContainer heading="Percentage">
          <SprkInputContainer>
            <div
              className="
                sprk-b-InputContainer__icon-container
                sprk-b-InputContainer__icon-container--narrow"
            >
              <SprkLabel htmlFor="percentage-1">Percentage</SprkLabel>
              <SprkIcon
                iconName="percent"
                additionalClasses="
                  sprk-b-InputContainer__icon
                  sprk-b-InputContainer__icon--right"
                aria-hidden="true"
              />
              <SprkInput
                id="percentage-1"
                additionalClasses="
                  sprk-b-TextInput--has-svg-icon
                  sprk-b-InputContainer__input--has-icon-right"
                type="tel"
              />
            </div>
          </SprkInputContainer>
        </ExampleContainer>
        <ExampleContainer heading="Phone Number">
          <SprkInputContainer>
            <SprkLabel htmlFor="phone-1">Phone Number</SprkLabel>
            <SprkInput
              id="phone-1"
              placeholder="(000) 000-0000"
              type="tel"
              name="phone"
              isValid={sprkIsValidPhone(phone)}
              value={phone}
              onChange={this.handleChange}
              formatter={sprkFormatPhone}
            />
            {!sprkIsValidPhone(phone) &&
              <SprkFieldError id="invalid-phone">
                <SprkIcon
                  iconName="exclamation-filled"
                  additionalClasses="sprk-b-ErrorIcon"
                  aria-hidden="true"
                />
                <div className="sprk-b-ErrorText">There is an error on this field.</div>
              </SprkFieldError>
            }
          </SprkInputContainer>

        </ExampleContainer>
        <ExampleContainer heading="Date (no picker)">
          <SprkInputContainer>
            <SprkLabel htmlFor="date-1">Date</SprkLabel>
            <SprkInput
              id="date-1"
              placeholder="01/01/2019"
              name="date"
              value={date}
              isValid={sprkIsValidDate(date)}
              onChange={this.handleChange}
              formatter={sprkFormatDate}
            />
            {!sprkIsValidDate(date) &&
              <SprkFieldError id="invalid-date">
                <SprkIcon
                  iconName="exclamation-filled"
                  additionalClasses="sprk-b-ErrorIcon"
                  aria-hidden="true"
                />
                <div className="sprk-b-ErrorText">There is an error on this field.</div>
              </SprkFieldError>
            }
          </SprkInputContainer>
        </ExampleContainer>
        <ExampleContainer heading="Multiple aria-describedbys">
          <SprkInputContainer>
            <SprkLabel>Name</SprkLabel>
            <SprkInput type="text" ariaDescribedBy="required_message" id="multi-aria"/>
            <SprkHelperText id="helper-text-2">The name you would like to be addressed as.</SprkHelperText>
            <SprkFieldError id="error-3">
              <SprkIcon
                iconName="exclamation-filled"
                additionalClasses="sprk-b-ErrorIcon"
                aria-hidden="true"
              />
              <div className="sprk-b-ErrorText">There is an error on this field.</div>
            </SprkFieldError>
            <div id="required_message">* This input is required.</div>
          </SprkInputContainer>
        </ExampleContainer>
      </>
    );
  }
}

export default SprkTextInputDocs;
