import { useEffect, useState } from "react";
import { EyeIcon, PencilIcon } from "@heroicons/react/24/outline";
import PageComponent from "../components/PageComponent";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

 

  return (
    <PageComponent title="Dashboard">
        Dashboard content 🏡     
    </PageComponent>
  );
}