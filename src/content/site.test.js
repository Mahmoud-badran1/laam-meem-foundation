import { describe, expect, it } from "bun:test";

import { contact } from "./site";

describe("public contact", () => {
  it("uses the official email without a public phone number", () => {
    expect(contact.email).toBe("info@laam-meem.com");
    expect(contact).not.toHaveProperty("phone");
  });
});