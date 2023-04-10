import Uncertain from "@/components/Uncertain.vue";
import { shallowMount, mount } from "@vue/test-utils";

describe("Uncertain component", () => {
  let wrapper;
  let clgSpy;
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({
        answer: "yes",
        forced: false,
        image: "https://yesno.wtf/assets/yes/1.gif"
      }),
    })
  );
  // mockear fetch
  beforeEach(() => {
    wrapper = shallowMount(Uncertain);
    clgSpy = jest.spyOn(console, "log");
    jest.clearAllMocks();
  });
  test("should match with snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  test("should not fire anything when writing on input field", async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");
    const input = wrapper.find("input");
    await input.setValue("Hello");
    expect(clgSpy).toHaveBeenCalled();
    expect(getAnswerSpy).not.toHaveBeenCalled();
    // console.log(wrapper.vm);
  });
  test("should fire getAnswer as soon as writing ? mark", async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");
    const input = wrapper.find("input");
    await input.setValue("Hello?");
    expect(getAnswerSpy).toHaveBeenCalled();
  });
  test("getAnswer tests", async () => {
    console.log(wrapper.vm);
    await wrapper.vm.getAnswer();
    expect(wrapper.vm.answer).toBe("yes");
    expect(wrapper.vm.image).toBe("https://yesno.wtf/assets/yes/1.gif");
    // expect(wrapper.vm.forced).toBe(false); // no funciona
  });
  test("should trow error when fetching fails", async () => {
    fetch.mockImplementation(() => Promise.reject("API is down"))

    await wrapper.vm.getAnswer();

    const img = wrapper.find("img");
    const answer = wrapper.vm.answer
    expect(img.exists()).toBeFalsy();
    expect(answer).toBe("Fail to fetch");
  });
});
