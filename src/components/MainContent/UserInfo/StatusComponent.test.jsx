import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import StatusComponent from "./StatusComponent";

describe("Profile status component", () => {
  test("Profile status input activate and has status value", () => {
    render(<StatusComponent profileStatus="Init status" />);
    const divText = screen.getByTestId("status-div");
    expect(divText).toBeInTheDocument();
    userEvent.dblClick(divText);
    expect(divText).not.toBeInTheDocument();
    const input = screen.getByTestId("status-input");
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("Init status");
  });

  test("Profile status bar contains proper status", () => {
    render(<StatusComponent profileStatus="Init status" />);
    const divText = screen.getByText("Init status");
    expect(divText).toBeInTheDocument();
  });

  test("profile status div should be displayed, profile status input should be hidden", () => {
    render(<StatusComponent profileStatus="Init status" />);
    const divStatus = screen.getByTestId("status-div");
    expect(divStatus).not.toBeNull();
    const inputStatus = screen.queryByTestId("status-input");
    expect(inputStatus).toBeNull();
  });

  // test("Profile status change", () => {
  //   // axios.get.mockReturnValue(response);
  //   render(<StatusComponent profileStatus="Init status" />);
  //   // const [editMode, setEditMode] = useState(false);

  //   const divText = screen.getByTestId("status-div");

  //   expect(divText).toBeInTheDocument();

  //   userEvent.dblClick(divText);

  //   expect(divText).not.toBeInTheDocument();

  //   const input = screen.getByTestId("status-input");
  //   expect(input).toBeInTheDocument();

  //   // userEvent.type(input, "New Status!");
  //   fireEvent.input(input, "New Status!");
  //   fireEvent.blur(input);

  //   expect(input).not.toBeInTheDocument();
  // });
});
