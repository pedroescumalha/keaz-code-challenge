import { Test, TestingModule } from "@nestjs/testing"
import { CustomPrismaModule } from "nestjs-prisma"
import { ContactsService } from "src/contacts/contacts.service"
import { extendedPrismaClient } from "../prisma/prisma.extension"
import { TagsService } from "../tags/tags.service"
import { ContactsController } from "./contacts.controller"

describe("Contactscontroller", () => {
	let controller: ContactsController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [
				CustomPrismaModule.forRootAsync({
					name: "PrismaService",
					isGlobal: true,
					useFactory: () => {
						return extendedPrismaClient
					},
				}),
			],
			controllers: [ContactsController],
			providers: [
				TagsService,
				{
					provide: ContactsService,
					useValue: {
						findAll: jest
							.fn()
							.mockImplementation(async (_userId, _query) => []),
					},
				},
			],
		}).compile()

		controller = module.get<ContactsController>(ContactsController)
	})

	it("should be defined", () => {
		expect(controller).toBeDefined()
	})

	describe("findAllContacts", () => {
		it("should return an array of contacts", async () => {
			// await expect(controller.findAllContacts({}, "userId")).resolves.toEqual(
			// 	[],
			// )
		})
	})
})
