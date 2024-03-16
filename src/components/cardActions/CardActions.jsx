"use client";

import Link from "next/link";
import React from "react";
import EditIcon from "../editIcon/EditIcon";
import DeleteIcon from "../deleteIcon/DeleteIcon";
import useUser from "@/store/useUser";

function CardActions({ itemtype = "", item }) {
  const { user } = useUser();
  const isAdmin = user.isAdmin;
  const isAuthor = user.email === item.userEmail;
  return (
    <div className="absolute flex gap-4  top-0 right-0 h-full">
      {isAuthor && (
        <Link href={`/${itemtype}/edit/${item.slug}`}>
          <EditIcon width={20} height={20} fill="white" />
        </Link>
      )}
      {(isAdmin || isAuthor) && (
        <DeleteIcon
          width={20}
          height={20}
          fill="white"
          item={item}
          itemtype={itemtype}
        />
      )}
    </div>
  );
}

export default CardActions;
