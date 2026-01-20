import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
      <>
          <Tabs defaultValue="education" className="w-full py-2">
              {/*change default value to work in future*/}
              <TabsList className="w-full" >
                  {/*<TabsTrigger value="work">Work</TabsTrigger>*/}
                  <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>
              {/*<TabsContent value="work">work goes here</TabsContent>*/}
              <TabsContent value="education">edu.</TabsContent>
          </Tabs>
      </>
  );
}
