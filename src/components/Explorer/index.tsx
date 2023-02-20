import { FileJson2, MoreHorizontal } from "lucide-react";
import { File } from "./File";
import { Folder } from "./Folder";

export function Explorer() {
  return (
    <div className="py-2 px-4 text-[#8F8CA8]">
      <strong className="font-medium text-xs pl-2 flex items-center justify-between">
        EXPLORER
        <MoreHorizontal size={16} strokeWidth={1.5} />
      </strong>

      <nav className="mt-4 flex flex-col">
        <File href="/others/contact">
            <FileJson2 size={16} />
            Contato.md
        </File>
        <Folder defaultOpen title="Javascript">
          <File href="/javascript/node-websocket">
            <FileJson2 size={16} />
            Node-WebSocket.md
          </File>
          <File href="/javascript/node-express-mongodb">
            <FileJson2 size={16} />
            Node-Express-MongoDB.md
          </File>
          <File href="/javascript/node-sequelize-api">
            <FileJson2 size={16} />
            Node-Sequelize-API.md
          </File>
          <File href="/javascript/whatsapp-api">
            <FileJson2 size={16} />
            WhatsApp-API.md
          </File>
          <File href="/javascript/whatsapp-gpt">
            <FileJson2 size={16} />
            WhatsApp-GPT.md
          </File>
          <File href="/javascript/estacio-notas">
            <FileJson2 size={16} />
            Estacio-Notas.md
          </File>
        </Folder>

        <Folder title="Golang">
          <File href="/golang/golang-buffalo-ffmpeg">
            <FileJson2 size={16} />
            Golang-Buffalo-FFMPEG.md
          </File>
          <File href="/golang/golang-gin-api">
            <FileJson2 size={16} />
            Golang-Gin-API.md
          </File>
          <File href="/golang/coisinhas-web">
            <FileJson2 size={16} />
            Coisinhas-WEB.md
          </File>
          <File href="/golang/golang-api">
            <FileJson2 size={16} />
            Golang-API.md
          </File>
        </Folder>

        <Folder title="HTML-CSS-JS">
          <File href="/html-css-js/diceroller">
            <FileJson2 size={16} />
            DiceRoller.md
          </File>
          <File href="/html-css-js/doctorsite">
            <FileJson2 size={16} />
            DoctorSite.md
          </File>
          <File href="/html-css-js/revelador-de-destino">
            <FileJson2 size={16} />
            Revelador-De-Destino.md
          </File>
        </Folder>

        <Folder title="Java">
          <File href="/java/java-springboot">
            <FileJson2 size={16} />
            Java-SpringBoot.md
          </File>
          <File href="/java/parking-control-api">
            <FileJson2 size={16} />
            Parking-Control-API.md
          </File>
          <File href="/java/rest-who-api">
            <FileJson2 size={16} />
            Rest-Who-API.md
          </File>
          <File href="/java/java-springboot-mongodb">
            <FileJson2 size={16} />
            Java-Springboot-MongoDB.md
          </File>
          <File href="/java/order-payment-springboot">
            <FileJson2 size={16} />
            Order-Payment-Springboot.md
          </File>
          <File href="/java/chessgame-java">
            <FileJson2 size={16} />
            ChessGame-Java.md
          </File>
          <File href="/java/dao-jdbc">
            <FileJson2 size={16} />
            DAO-JDBC.md
          </File>
          <File href="/java/javafx-jdbc">
            <FileJson2 size={16} />
            JavaFX-JDBC.md
          </File>
        </Folder>

        <Folder title="Kotlin">
          <File href="/kotlin/mercado-livro">
            <FileJson2 size={16} />
            Mercado-Livro.md
          </File>
        </Folder>
      </nav>
    </div>
  )
}