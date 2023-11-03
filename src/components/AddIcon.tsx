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
          <input
            id="addIcon"
            className="flex-grow py-5"
            type="text"
            value={this.state.iconName}
            onChange={this.handleChange}
            placeholder="Icon Name"
            aria-label="Add Icon"
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
