import React, { useEffect } from "react";
import { notification } from "antd";
import type { NotificationPlacement } from "antd/es/notification/interface";
import type { NotificationProps } from "~/types";

export const Notification: React.FC<NotificationProps> = ({
  message,
  type,
}) => {
  console.log("notification rendered");
  const [api, contextHolder] = notification.useNotification();
  const placement: NotificationPlacement = "bottomLeft";
  const key = "updatable";

  useEffect(() => {
    if (message) {
      switch (type) {
        case "success":
          api.success({
            key,
            message: message,
            placement,
          });
          break;
        case "error":
          api.error({
            key,
            message: message,
            placement,
          });
          break;
        case "info":
          api.info({
            key,
            message: message,
            placement,
          });
          break;
        case "warning":
          api.warning({
            key,
            message: message,
            placement,
          });
          break;
        default:
          break;
      }
    }
  }, [api, message, type]);

  return <>{contextHolder}</>;
};
