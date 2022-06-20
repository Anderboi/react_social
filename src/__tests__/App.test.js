import { render, screen, fireEvent } from "@testing-library/react";
import SocialApp from "../App";

describe("MainApp component check", () => {
  test("renders learn react link", () => {
    render(<SocialApp />);
    const logoElement = screen.getByText(/minimal/i);
    const loginInput = screen.getByPlaceholderText(/email/i);
    expect(logoElement).toBeInTheDocument();
    expect(loginInput).toBeInTheDocument();
    expect(loginInput).toMatchSnapshot();
  });

  // test("Follow button toggle", () => {
  //   render(<SocialApp />);
  //   const button = screen.queryByTestId("profile-btn");
  //   expect(button).toBeInTheDocument();
    
  // });
});
