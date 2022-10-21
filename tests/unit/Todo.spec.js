import { mount } from "@vue/test-utils";
import ListItems from "@/components/ListItems.vue";
import Todo from "@/components/todo/Todo.vue";
describe("ListItems.vue", () => {
    it("Should add new todo", () => {
        const wrapper = mount(ListItems);
        expect(wrapper.findAll('[data-item="todo"]')).toContain(Todo);
    })
});