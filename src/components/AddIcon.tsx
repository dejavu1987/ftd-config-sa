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
        <div className="flex justify-center items-center gap-2 my-5">
          <label htmlFor="addIcon" className="flex-shrink whitespace-nowrap">
            Add Icon
          </label>
          <input
            id="addIcon"
            className="flex-grow"
            type="text"
            value={this.state.iconName}
            onChange={this.handleChange}
            placeholder="Icon Name"
          />
          <button
            className="button button--secondary whitespace-nowrap"
            type="submit"
          >
            Add Icon
          </button>
        </div>
      </form>
    );
  }
}

export default AddIconForm;
