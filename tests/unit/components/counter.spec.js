import Counter from "@/components/Counter.vue";
import { shallowMount, mount } from "@vue/test-utils";

describe("Counter component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });
  test('should match with snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot();
  });
  test("should renders default title", () => {
    const title = wrapper.find("h2");
    expect(title.text()).toBe("Counter");
  });
  test("should renders default value", () => {
    const value = wrapper.find("p");
    expect(value.text()).toBe("1 2 = 1");
  });
  test("should increase its value by 1", async () => {
    const increaseBtn = wrapper.find("[data-testidBtn='increase']");
    await increaseBtn.trigger("click");
    const value = wrapper.find("span");
    expect(value.text()).toBe("4");
  });
  test("should apply props value from start property", async () => {
    // ways to write the same
    const { start } = wrapper.props();
    const start2 = wrapper.props("start");
    const value = wrapper.find("span").text();
    expect(value).toBe(start.toString());
  });
  test("should show prop title", async () => {
    const wrapper = shallowMount(Counter, {
        props: {
            title: 'Hello World'
        }
    });
    expect(wrapper.find('h2').text()).toBe('Hello World');
  });
});
