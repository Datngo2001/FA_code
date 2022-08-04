import renderer from "react-test-renderer"
import Product from "./Product"
describe("<Product/>", () => {
    it.only("should render correcttly when items is empty", () => {
        const tree = renderer.create(<Product />).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it("should render correcttly when items has value", () => {
        const tree = renderer.create(<Product items={["Honda", "BMW", "Volvo"]} />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})