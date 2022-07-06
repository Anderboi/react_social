import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { NavMenu } from "../components/NavMenu/NavMenu";
import SocialApp from './../App';

describe("Navigation tests", () => {
  test("Links should lead to proper pages", () => {
    render(

        <SocialApp isAuth={true}/>

    );

    const profileLink = screen.getByTestId("profile-link");
    const messagesLink = screen.getByTestId("messages-link");
    const newsLink = screen.getByTestId("news-link");
    const musicLink = screen.getByTestId("music-link");
    const usersLink = screen.getByTestId("users-link");
    const settingsLink = screen.getByTestId("settings-link");

    userEvent.click(profileLink);
    expect(screen.getByTestId("profile-page")).toBeInTheDocument();
    userEvent.click(messagesLink);
    expect(screen.getByTestId("messages-page")).toBeInTheDocument();
    userEvent.click(newsLink);
    expect(screen.getByTestId("news-page")).toBeInTheDocument();
    userEvent.click(musicLink);
    expect(screen.getByTestId("music-page")).toBeInTheDocument();
    userEvent.click(usersLink);
    expect(screen.getByTestId("users-page")).toBeInTheDocument();
    userEvent.click(settingsLink);
    expect(screen.getByTestId("settings-page")).toBeInTheDocument();
  });
});
