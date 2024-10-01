import { Test, TestingModule } from "@nestjs/testing"
import { CustomPrismaModule } from "nestjs-prisma"
import { ContactsService } from "../contacts/contacts.service"
import { extendedPrismaClient } from "../prisma/prisma.extension"
import { GroupsController } from "./groups.controller"
import { GroupsService } from "./groups.service"

describe("Groupscontroller", () => {
	let controller: GroupsController

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
			controllers: [GroupsController],
			providers: [ContactsService, GroupsService],
		}).compile()

		controller = module.get<GroupsController>(GroupsController)
	})

	it("should be defined", () => {
		expect(controller).toBeDefined()
	})
})
