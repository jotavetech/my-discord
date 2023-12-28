"use client";

import { useEffect, useState } from "react";

import CreateServerModal from "@/components/modals/create-server-modal";
import EditServerModal from "@/components/modals/edit-server-modal";
import InviteModal from "@/components/modals/invite-modal";
import MembersModal from "@/components/modals/members-modal";
import CreateChannelModal from "@/components/modals/create-channel-modal";
import LeaveModal from "@/components/modals/leave-modal";
import DeleteModal from "@/components/modals/delete-modal";
import DeleteChannelModal from "@/components/modals/delete-channel-modal";
import EditChannelModal from "../modals/edit-channel-modal";
import MessageFileModal from "../modals/message-file-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
      <LeaveModal />
      <DeleteModal />
      <DeleteChannelModal />
      <EditChannelModal />
      <MessageFileModal />
    </>
  );
};

export default ModalProvider;
