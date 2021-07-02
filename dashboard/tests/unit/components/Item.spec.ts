import { shallowMount } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import Item from "@/components/Dashboard/Item.vue";
import { Entry } from "@/common/Entry";



describe("Item", () => {
  it("renders a item", () => {
    const entry = new Entry(0, "", "", "", "", false, "", "");

    const wrapper = mount(Item, {
      propsData: {
        item: entry,
      },
    });
    expect(wrapper.props().item).toBe(entry);
  });
});

describe("Item", () => {
  it("renders props.item.API when passed", () => {
    const entry = new Entry(0, "", "", "", "", false, "", "");
    const wrapper = shallowMount(Item, {
      propsData: {
        item: entry,
      },
    });
    expect(wrapper.find(".item-api").text()).toMatch(entry.API);
  });
});

