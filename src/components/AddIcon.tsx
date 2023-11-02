import React, { Component, ChangeEvent } from 'react';

interface AddIconFormProps {
  addIcon: (name: string) => void;
}

interface AddIconFormState {
  iconName: string;
}

class AddIconForm extends Component<AddIconFormProps, AddIconFormState> {
  constructor(props: AddIconFormProps) {
    super(props);
    this.state = {
      iconName: '',
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ iconName: event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { iconName } = this.state;
    if (iconName) {
      this.props.addIcon(iconName);
      this.setState({ iconName: '' });
    }
  };

  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <div className="form-field flex">
          <label htmlFor="addIcon">Add Icon</label>
          <input
            id="addIcon"
            type="text"
            value={this.state.iconName}
            onChange={this.handleChange}
            placeholder="Icon Name"
          />
          <button className="button button--primary" type="submit">
            Add Icon
          </button>
        </div>
      </form>
    );
  }
}

export default AddIconForm;
