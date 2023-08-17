import supertest from "supertest";
import { describe, it } from "mocha";
import { expect } from "chai";

const baseUrl = "localhost:3000/api/v1";
const request = supertest(baseUrl);

describe("POST /novels", () => {
	it("should return a 201 status", async () => {
		const response = await request.post("/novels").send({
			title: "Test",
			synopsis: "Test",
			author: "Test",
		});
		expect(response.status).eql(201);
		expect(response.body.id).exist;

		const delRes = await request.del(`/novels/${response.body.id}`);
	});
});

describe("GET /novels", () => {
	it("should return a 200 status", async () => {
		const response = await request.get("/novels");
		expect(response.status).eql(200);
	});

	it("should return a 200 status", async () => {
		const testBody = {
			title: "Test",
			synopsis: "Test",
			author: "Test",
		};

		const postRes = await request.post("/novels").send(testBody);

		const response = await request.get(`/novels/${postRes.body.id}`);
		expect(response.status).eql(200);
		expect(response.body).contain(testBody);

		const delRes = await request.delete(`/novels/${postRes.body.id}`);
	});
});
