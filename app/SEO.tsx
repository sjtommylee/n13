// using the new metadata API
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "test header, this metadata should show in dom",
    template: "test header, this metadata should show in dom",
  },
  description: "test header, this metadata should show in dom",
};
