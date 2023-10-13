import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App", () => {
    it("should return render App", () => {
        render(<App />);
        const app = screen.getByText("App");
        expect(app).toBeInTheDocument();
    });
});
