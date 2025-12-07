import { getRegularCostomer } from "@/lib/api/regularCostomer";
import { RegularCustomer } from "@/src/types/regularCustomer";

export const MakeOrderServer = async () => {
  try {
    const prismaData = await getRegularCostomer();

    const customerList: RegularCustomer[] = prismaData.map((customer) => ({
      id: customer.id,
      name: customer.name,
      phone: customer.phone,
      postCode: customer.postCode,
      address1: customer.address1,
      address2: customer.address2,
    }));

    return customerList;
  } catch (err) {
    console.log("エラーが発生しました(MakeOrder.ts)", err);
    throw err;
  }
};
