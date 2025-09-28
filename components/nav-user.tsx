"use client";

import { CurrentUser, UserButton } from "@stackframe/stack";

export function NavUser({ user }: { user: CurrentUser | null }) {
  if (!user) return null;
  return (
    <div className="border border-gray-200 rounded-2xl">
      <UserButton showUserInfo />
    </div>
  );
}
