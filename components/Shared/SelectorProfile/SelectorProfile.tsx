"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { ChevronDown, LogOut, Pencil } from "lucide-react";

import { useCurrentNetflixUser } from "@/hooks/use-current-user";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { SelectorProfileProps } from "./SelectorProfile.types";
import { UserNetflix } from "@prisma/client";

export function SelectorProfile(props: SelectorProfileProps) {
  const { users } = props;
  const router = useRouter();
  const { changeCurrentUser, currentUser } = useCurrentNetflixUser();

  const onChangeUser = (userNetflix: UserNetflix) => {
    changeCurrentUser(userNetflix);
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex gap-1 items-center">
          <Image
            src={
              currentUser ? currentUser.avatarUrl : "/profiles/profile-1.png"
            }
            alt="Profile Image"
            width={35}
            height={35}
          />
          <ChevronDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-2 bg-black/80 border-transparent">
        {users.map((user) => (
          <DropdownMenuItem
            key={user.id}
            onClick={() => onChangeUser(user)}
            className="flex gap-2 mb-3 group"
          >
            <Image
              src={user.avatarUrl}
              alt="Profile Image"
              width={30}
              height={30}
            />
            <p className="text-white group-hover:text-black">
              {user.profileName}
            </p>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem
          className="flex gap-2 mb-3 group text-white cursor-pointer"
          onClick={() => router.push("/profiles")}
        >
          <Pencil className="w-4 h-4" />
          Administrar perfiles
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-2 mb-3 text-white cursor-pointer"
          onClick={() => signOut()}
        >
          <LogOut className="w-4 h-4" />
          Cerrar sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
