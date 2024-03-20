"use client";

import React from "react";
import EditIcon from "../editIcon/EditIcon";
import DeleteIcon from "../deleteIcon/DeleteIcon";
import EditorPickIcon from "../editorPickIcon/EditorPickIcon";
import useUser from "@/store/useUser";

function CardActions({ itemtype = "", item }) {
  const { user } = useUser();
  const isAdmin = user.isAdmin;
  const isAuthor = user.email === item.userEmail;
  return (
    <div className="absolute flex gap-4  top-0 right-0 h-full">
      {isAuthor && (
        <>
          <EditIcon
            itemtype={itemtype}
            slug={item.slug}
            width={20}
            height={20}
            fill="white"
          />
        </>
      )}
      {isAdmin && (
        <EditorPickIcon
          width={20}
          height={20}
          fill="white"
          item={item}
          itemtype={itemtype}
          className="hover:scale-150"
        />
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
