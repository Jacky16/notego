import HomePage from "../../pages/index";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("HomePage component", () => {
    it("renders hello world message", () => {
        render(<HomePage />);

        const helloWorldMessage = screen.getByRole("heading", {
            name: /hello world/i,
            level: 1,
        });

        expect(helloWorldMessage).toBeDefined();
    });
});
