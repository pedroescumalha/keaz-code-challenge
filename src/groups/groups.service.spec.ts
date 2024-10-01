import { Test, TestingModule } from "@nestjs/testing"
import { CustomPrismaModule } from "nestjs-prisma"
import { ContactsService } from "../contacts/contacts.service"
import { extendedPrismaClient } from "../prisma/prisma.extension"
import { GroupsService } from "./groups.service"

describe("Groupsservice", () => {
	let service: GroupsService

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
			providers: [ContactsService, GroupsService],
		}).compile()

		service = module.get<GroupsService>(GroupsService)
	})

	it("should be defined", () => {
		expect(service).toBeDefined()
	})
})
