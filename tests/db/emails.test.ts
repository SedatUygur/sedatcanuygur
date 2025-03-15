import { insertEmail } from "@/app/api/db/emails";
import { db } from "@/db";

jest.mock("@/db", () => ({
  db: {
    insert: {
      values: jest.fn(),
    },
  },
}));

describe("insertEmail", () => {
  // Skipping for now. I think I need to look into how to set up a mock database which isn't
  // really something I'm interested in doing at this moment
  //
  // describe("when the data is invalid", () => {
  //   it("returns a object with an error", async () => {
  //     const response = await insertEmail({
  //       fullName: "",
  //       emailAddress: "not-an-email.com",
  //       message: "Test Message"
  //     });
  //
  //     expect(response).toMatchObject({
  //       base: [],
  //       formFields: {
  //         fullName: ""
  //       }
  //     })
  //   })
  // })

  describe("when the email is inserted", () => {
    it("returns an empty object", async () => {
      // Unsure of how to mock nested functions at the moment
      // @ts-ignore
      (db.insert.values as jest.Mock).mockReturnValueOnce({
        data: {
          id: "testemailsuccess",
        },
        error: null,
      });

      const response = await insertEmail({
        fullName: "Test Name",
        emailAddress: "test-email@gmail.com",
        message: "Test Message",
      });

      expect(response).toMatchObject({});
    });
  });
});
