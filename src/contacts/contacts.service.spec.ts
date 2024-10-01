import { Test, TestingModule } from "@nestjs/testing"
import { Contact } from "@prisma/client"
import {
	CustomPrismaModule,
	CustomPrismaService,
	PrismaService,
} from "nestjs-prisma"
import {
	ExtendedPrismaClient,
	extendedPrismaClient,
} from "src/prisma/prisma.extension"
import { GroupsService } from "../groups/groups.service"
import { ContactsService } from "./contacts.service"

const mockContact = (
	id = "123",
	email = "janedoe@test.com",
	fon = "+49 123 45678",
	countryCode = "de",
	createdAt = new Date(),
): Partial<Contact> => ({
	id,
	email,
	fon,
	countryCode,
	createdAt,
})

const contactArray = [
	mockContact(),
	mockContact("1234", "jondoe@test.com", "+49 123 456789"),
]

describe("Contactsservice", () => {
	let service: ContactsService

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [
				CustomPrismaModule.forRootAsync({
					name: "PrismaService",
					isGlobal: true,
					useFactory: () => {
						const client = extendedPrismaClient
						client.contact.findMany = jest.fn().mockResolvedValue(contactArray)
						return client
					},
				}),
			],
			providers: [GroupsService, ContactsService],
		}).compile()

		service = module.get<ContactsService>(ContactsService)
	})

	it("should be defined", () => {
		expect(service).toBeDefined()
	})

	afterEach(() => jest.clearAllMocks())

	it("should return all contacts", async () => {
		const contacts = await service.findAll({
			userID: "userId",
		})
		expect(contacts).toEqual(contactArray)
	})
})
