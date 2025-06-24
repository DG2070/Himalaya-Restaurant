import { Injectable, NotFoundException } from "@nestjs/common";
import { Permission } from "src/permission/entities/permission.entity";
import { Role } from "src/role/entities/role.entity";
import { DataSource, In } from "typeorm";
import { Seeder } from "typeorm-extension";

@Injectable()
export class RolesPermissionsSeeder implements Seeder {
  async run(dataSource: DataSource): Promise<void> {
    await dataSource.query(`
        TRUNCATE TABLE "role_permissions" RESTART IDENTITY CASCADE;
    `);
    const permissionRepository = dataSource.getRepository(Permission);
    const roleRepository = dataSource.getRepository(Role);
    const allPermissions = await permissionRepository.find();
    const normalPermissions = await permissionRepository.find({
      where: {
        name: In(["add_data", "read_data", "update_data", "delete_data"]),
      },
    });

    const superRole = await roleRepository.findOne({
      where: { name: "super" },
    });
    const adminRole = await roleRepository.findOne({
      where: { name: "admin" },
    });
    const employeeRole = await roleRepository.findOne({
      where: { name: "employee" },
    });
    if (!adminRole || !superRole || !employeeRole)
      throw new NotFoundException(
        `Error seeding permissions for the role "super" or "admin" or "employee".`
      );
    superRole.permissions = allPermissions;
    adminRole.permissions = normalPermissions;
    employeeRole.permissions = normalPermissions;
    await roleRepository.save(adminRole);
    await roleRepository.save(superRole);
    await roleRepository.save(employeeRole);
  }
}
