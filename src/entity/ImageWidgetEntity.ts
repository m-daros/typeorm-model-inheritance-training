import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { WidgetEntity } from "./WidgetEntity";

@Entity ()
export class ImageWidgetEntity {

    @PrimaryGeneratedColumn ()
    id: number;

    @OneToOne ( () => WidgetEntity, { cascade: true } )
    @JoinColumn ()
    widget: WidgetEntity;

    @Column ()
    src: string;
}