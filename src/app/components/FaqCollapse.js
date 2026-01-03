"use client";
import { Collapse } from "antd";
import { ArrowChev } from "../../../public/assets/svgs/svg";
const { Panel } = Collapse;

export default function FaqCollapse({ items }) {
  return (
    <Collapse
      defaultActiveKey={["0"]}
      expandIconPlacement="end"
      expandIcon={({ isActive }) => (
        <span
          style={{
            display: "inline-flex",
            transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        >
          <ArrowChev />
        </span>
      )}
    >
      {items.map((item, index) => (
        <Panel header={item.question} key={index}>
          <p>{item.answer}</p>
        </Panel>
      ))}
    </Collapse>
  );
}
