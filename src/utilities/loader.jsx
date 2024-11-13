import { base_url, fetch_url, header } from "./dataPanel";

// /getall?erp_url=erp_url&doctype_name=doctype_name
export const loader = async () => {
  // Start all fetch requests simultaneously
  const [groupsData, itemsData, itmRate] = await Promise.all([
    fetch(`${fetch_url}/getall?erp_url=${base_url}&doctype_name=Item Group`, {
      method: "GET",
      headers: header,
    }),
    fetch(`${fetch_url}/getall?erp_url=${base_url}&doctype_name=Website Item`, {
      method: "GET",
      headers: header,
    }),
    fetch(`${fetch_url}/getall?erp_url=${base_url}&doctype_name=Item`, {
      method: "GET",
      headers: header,
    }),
  ]);

  // Parse all JSON responses
  const [groups, webItems, items] = await Promise.all([
    groupsData.json(),
    itemsData.json(),
    itmRate.json(),
  ]);

  return { groups, webItems, items };
};
