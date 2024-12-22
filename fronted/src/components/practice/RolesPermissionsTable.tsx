import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

interface Permission {
  id: string;
  name: string;
  description: string;
}

interface Role {
  id: string;
  name: string;
  permissions: string[];
}

const DEFAULT_PERMISSIONS: Permission[] = [
  {
    id: "view_patients",
    name: "View Patients",
    description: "Can view patient records",
  },
  {
    id: "edit_patients",
    name: "Edit Patients",
    description: "Can edit patient records",
  },
  {
    id: "view_appointments",
    name: "View Appointments",
    description: "Can view appointment calendar",
  },
  {
    id: "manage_appointments",
    name: "Manage Appointments",
    description: "Can create and modify appointments",
  },
  {
    id: "view_inventory",
    name: "View Inventory",
    description: "Can view practice inventory",
  },
  {
    id: "manage_inventory",
    name: "Manage Inventory",
    description: "Can modify practice inventory",
  },
];

const DEFAULT_ROLES: Role[] = [
  {
    id: "dentist",
    name: "Dentist",
    permissions: ["view_patients", "edit_patients", "view_appointments", "manage_appointments", "view_inventory"],
  },
  {
    id: "hygienist",
    name: "Dental Hygienist",
    permissions: ["view_patients", "view_appointments", "manage_appointments", "view_inventory"],
  },
  {
    id: "receptionist",
    name: "Receptionist",
    permissions: ["view_patients", "view_appointments", "manage_appointments"],
  },
  {
    id: "practice_manager",
    name: "Practice Manager",
    permissions: ["view_patients", "edit_patients", "view_appointments", "manage_appointments", "view_inventory", "manage_inventory"],
  },
];

export const RolesPermissionsTable = () => {
  const [roles, setRoles] = useState<Role[]>(DEFAULT_ROLES);

  const togglePermission = (roleId: string, permissionId: string) => {
    setRoles(currentRoles =>
      currentRoles.map(role => {
        if (role.id === roleId) {
          const newPermissions = role.permissions.includes(permissionId)
            ? role.permissions.filter(p => p !== permissionId)
            : [...role.permissions, permissionId];
          return { ...role, permissions: newPermissions };
        }
        return role;
      })
    );
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Role</TableHead>
            {DEFAULT_PERMISSIONS.map(permission => (
              <TableHead key={permission.id} className="text-center">
                {permission.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {roles.map(role => (
            <TableRow key={role.id}>
              <TableCell className="font-medium">{role.name}</TableCell>
              {DEFAULT_PERMISSIONS.map(permission => (
                <TableCell key={permission.id} className="text-center">
                  <Checkbox
                    checked={role.permissions.includes(permission.id)}
                    onCheckedChange={() => togglePermission(role.id, permission.id)}
                    aria-label={`${role.name} ${permission.name} permission`}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};